'use client'

import useSWR from 'swr'

import { getRoom } from '@/libs/apis'
import LoadingSpinner from '../../loading'
import HotelPhotoGallery from '../../_components/rooms/HotelPhotoGallery'

export default function RoomDetails(props: { params: { slug: string } }) {
	const {
		params: { slug },
	} = props

	const fetchRoom = async () => getRoom(slug)
	const { data: room, error, isLoading } = useSWR('/api/room', fetchRoom)

	if (error) throw new Error('Cannot fetch data')
	if (typeof room === 'undefined' && !isLoading)
		throw new Error('Cannot fetch data')

	if (!room) return <LoadingSpinner />

	return (
		<div>
			<HotelPhotoGallery photos={room.images} />
		</div>
	)
}
