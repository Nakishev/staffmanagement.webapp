import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPersonPositionDTO } from './personposition.types'

const baseUrl = 'https://aa-staffservice-prod.azurewebsites.net/api/' //process.env.REACT_APP_STAFF_API_URL

export const personPositionsApi = createApi({
	reducerPath: 'api/personPositionsApi',
	tagTypes: ['PersonPositions'],
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: build => ({
		getPersonPositions: build.query<IPersonPositionDTO[], string>({
			query: personId => ({ url: `PersonPositions/${personId}` }),
			providesTags: result =>
				result
					? [
							...result.map(({ positionId }) => ({
								type: 'PersonPositions' as const,
								positionId,
							})),
							{ type: 'PersonPositions', positionId: 'LIST' },
					  ]
					: [{ type: 'PersonPositions', positionId: 'LIST' }],
		}),
		addPersonPosition: build.mutation({
			query: body => ({
				url: 'PersonPositions',
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'PersonPositions', id: 'LIST' }],
		}),
		updatePersonPosition: build.mutation({
			query: body => ({
				url: `PersonPositions/${body.payload.id}`,
				method: 'PUT',
				body: body.payload,
			}),
			invalidatesTags: [{ type: 'PersonPositions', id: 'LIST' }],
		}),
	}),
})

export const {
	useGetPersonPositionsQuery,
	useAddPersonPositionMutation,
	useUpdatePersonPositionMutation,
} = personPositionsApi
