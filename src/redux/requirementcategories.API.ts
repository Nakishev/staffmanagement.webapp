import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRequirementCategoryDTO } from './requirementcategory.dto.interface'

const baseUrl = 'https://aa-staffservice-prod.azurewebsites.net/api/' //process.env.REACT_APP_STAFF_API_URL

export const requirementCategoriesApi = createApi({
	reducerPath: 'api/RequirementCategories',
	tagTypes: ['RequirementCategory'],
	baseQuery: fetchBaseQuery({
		baseUrl,
	}),
	endpoints: build => ({
		getCategories: build.query<IRequirementCategoryDTO[], void>({
			query: () => 'RequirementCategories',
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({
								type: 'RequirementCategory' as const,
								id,
							})),
							{ type: 'RequirementCategory', id: 'LIST' },
					  ]
					: [{ type: 'RequirementCategory', id: 'LIST' }],
		}),
		addCategory: build.mutation({
			query: body => ({
				url: 'RequirementCategories/',
				method: 'POST',
				headers: {
					'Content-Type': ' application/json',
				},
				body,
			}),
			invalidatesTags: [{ type: 'RequirementCategory', id: 'LIST' }],
		}),
		updateCategory: build.mutation({
			query: body => ({
				url: `RequirementCategories/${body.payload.id}`,
				method: 'PUT',
				body: body.payload,
				headers: {
					'Content-Type': 'application/json',
				},
			}),
			invalidatesTags: [{ type: 'RequirementCategory', id: 'LIST' }],
		}),
	}),
})

export const {
	useGetCategoriesQuery,
	useAddCategoryMutation,
	useUpdateCategoryMutation,
} = requirementCategoriesApi
