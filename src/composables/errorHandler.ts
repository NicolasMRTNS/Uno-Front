import type { AxiosError } from 'axios'

export const useErrorHandler = () => {
  const handleError = (error: AxiosError) => {
    console.log(error)
  }

  return { handleError }
}
