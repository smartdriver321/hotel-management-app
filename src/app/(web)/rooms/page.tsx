'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

import { Room } from '@/types/room'
import { getRooms } from '@/libs/apis'
import Search from '../_components/Search'
import RoomCard from '../_components/rooms/RoomCard'

export default function Rooms() {
	const searchParams = useSearchParams()
	const { data, error, isLoading } = useSWR('get/hotelRooms', fetchData)

	function fetchData() {
		return getRooms()
	}

	if (error) throw new Error('Cannot fetch data')
	if (typeof data === 'undefined' && !isLoading)
		throw new Error('Cannot fetch data')

	const [roomTypeFilter, setRoomTypeFilter] = useState('')
	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {
		const searchQuery = searchParams.get('searchQuery')
		const roomType = searchParams.get('roomType')

		if (roomType) setRoomTypeFilter(roomType)
		if (searchQuery) setSearchQuery(searchQuery)
	}, [])

	const filterRooms = (rooms: Room[]) => {
		return rooms.filter((room) => {
			// Apply room type filter

			if (
				roomTypeFilter &&
				roomTypeFilter.toLowerCase() !== 'all' &&
				room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
			) {
				return false
			}

			//   Apply search query filter
			if (
				searchQuery &&
				!room.name.toLowerCase().includes(searchQuery.toLowerCase())
			) {
				return false
			}

			return true
		})
	}

	const filteredRooms = filterRooms(data || [])

	return (
		<div className='container mx-auto pt-10'>
			<Search
				roomTypeFilter={roomTypeFilter}
				searchQuery={searchQuery}
				setRoomTypeFilter={setRoomTypeFilter}
				setSearchQuery={setSearchQuery}
			/>

			<div className='flex mt-20 justify-between flex-wrap'>
				{filteredRooms.map((room) => (
					<RoomCard key={room._id} room={room} />
				))}
			</div>
		</div>
	)
}
