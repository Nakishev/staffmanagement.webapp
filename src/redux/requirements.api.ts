import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRequirementDTO } from './requirement.dto.interface'

const baseUrl = 'https://aa-staffservice-prod.azurewebsites.net/api/' //process.env.REACT_APP_STAFF_API_URL

export const requirementsApi = createApi({
	reducerPath: 'api/Requirements',
	tagTypes: ['Requirements'],
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: build => ({
		getRequirements: build.query<IRequirementDTO[], void>({
			query: () => 'Requirements',
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({
								type: 'Requirements' as const,
								id,
							})),
							{ type: 'Requirements', id: 'LIST' },
					  ]
					: [{ type: 'Requirements', id: 'LIST' }],
		}),
		getPersonLinkedRequirements: build.query<IRequirementDTO[], string>({
			query: personId => `Requirements/Person/${personId}/Linked`,
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({
								type: 'Requirements' as const,
								id,
							})),
							{ type: 'Requirements', id: 'LIST' },
					  ]
					: [{ type: 'Requirements', id: 'LIST' }],
		}),
		getPersonUnlinkedRequirements: build.query<IRequirementDTO[], string>({
			query: personId => `Requirements/Person/${personId}/Unlinked`,
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({
								type: 'Requirements' as const,
								id,
							})),
							{ type: 'Requirements', id: 'LIST' },
					  ]
					: [{ type: 'Requirements', id: 'LIST' }],
		}),
		addRequirement: build.mutation({
			query: body => ({
				url: 'Requirements',
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Requirements', id: 'LIST' }],
		}),
		addPersonRequirement: build.mutation({
			query: body => ({
				url: 'Requirements/Person',
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Requirements', id: 'LIST' }],
		}),
		updateRequirement: build.mutation({
			query: body => ({
				url: `Requirements/${body.payload.id}`,
				method: 'PUT',
				body: body.payload,
			}),
			invalidatesTags: [{ type: 'Requirements', id: 'LIST' }],
		}),
	}),
})

export const {
	useGetRequirementsQuery,
	useGetPersonLinkedRequirementsQuery,
	useGetPersonUnlinkedRequirementsQuery,
	useAddRequirementMutation,
	useAddPersonRequirementMutation,
	useUpdateRequirementMutation,
} = requirementsApi
