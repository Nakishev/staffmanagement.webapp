import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPersonDTO as IPerson } from './person.types'

const baseUrl = 'https://aa-staffservice-prod.azurewebsites.net/api/' //process.env.REACT_APP_STAFF_API_URL

export const personsApi = createApi({
	reducerPath: 'api/personsApi',
	tagTypes: ['Person'],
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: build => ({
		getPersons: build.query<IPerson[], void>({
			query: () => 'Persons',
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({ type: 'Person' as const, id })),
							{ type: 'Person', id: 'LIST' },
					  ]
					: [{ type: 'Person', id: 'LIST' }],
		}),
		getPerson: build.query<IPerson, string>({
			query: id => ({ url: `Persons/${id}` }),
		}),
		addPerson: build.mutation({
			query: body => ({
				url: 'Persons',
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Person', id: 'LIST' }],
		}),
		updatePerson: build.mutation({
			query: body => ({
				url: `Persons/${body.payload.id}`,
				method: 'PUT',
				body: body.payload,
			}),
			invalidatesTags: [{ type: 'Person', id: 'LIST' }],
		}),
	}),
})

export const {
	useGetPersonQuery,
	useGetPersonsQuery,
	useAddPersonMutation,
	useUpdatePersonMutation,
} = personsApi
