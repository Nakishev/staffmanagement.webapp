import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { requirementCategoriesApi } from './requirementcategories.API'
import { requirementsApi } from './requirements.api'
import { personsApi } from './personsAPI'

export const store = configureStore({
	reducer: {
		[requirementCategoriesApi.reducerPath]: requirementCategoriesApi.reducer,
		[requirementsApi.reducerPath]: requirementsApi.reducer,
		[personsApi.reducerPath]: personsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			requirementCategoriesApi.middleware,
			requirementsApi.middleware,
			personsApi.middleware
		),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
