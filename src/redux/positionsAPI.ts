import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPositionDTO } from './position.types'

const baseUrl = 'https://aa-staffservice-prod.azurewebsites.net/api/' //process.env.REACT_APP_STAFF_API_URL

export const positionsApi = createApi({
	reducerPath: 'api/PositionsApi',
	tagTypes: ['Positions'],
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: build => ({
		getPositions: build.query<IPositionDTO[], void>({
			query: () => ({ url: `Positions/` }),
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({
								type: 'Positions' as const,
								id,
							})),
							{ type: 'Positions', id: 'LIST' },
					  ]
					: [{ type: 'Positions', id: 'LIST' }],
		}),
		getPosition: build.query<IPositionDTO[], void>({
			query: id => ({ url: `Positions/${id}` }),
		}),
		addPosition: build.mutation({
			query: body => ({
				url: 'Positions',
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Positions', id: 'LIST' }],
		}),
		updatePosition: build.mutation({
			query: body => ({
				url: `Positions/${body.payload.id}`,
				method: 'PUT',
				body: body.payload,
			}),
			invalidatesTags: [{ type: 'Positions', id: 'LIST' }],
		}),
	}),
})

export const {
	useGetPositionQuery,
	useGetPositionsQuery,
	useAddPositionMutation,
	useUpdatePositionMutation,
} = positionsApi
