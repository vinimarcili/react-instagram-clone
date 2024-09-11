import { InstagramResponse } from "../types/api.type"

const API_URL = './public/data.json'

export const fetchInstagram = async (): Promise<InstagramResponse> => {
  const response = await fetch(API_URL)
  return response.json()
}

export const getFeed = async () => {
  const response = await fetchInstagram()
  return response.data
}

export const getPost = async (id: string) => {
  const response = await fetchInstagram()
  return response.data.find((post) => post.id === id)
}

export const getPostsByUser = async (userId: string) => {
  const response = await fetchInstagram()
  return response.data.filter((post) => post.user.id === userId)
}
