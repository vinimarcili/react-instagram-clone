import { InstagramResponse } from "../types/api.type"
import { Post } from "../types/post.type"

const API_URL = './public/data.json'

export const fetchInstagram = async (): Promise<InstagramResponse> => {
  const response = await fetch(API_URL)
  return response.json()
}

export const getFeed = async (): Promise<Post[]> => {
  const response = await fetchInstagram()
  return response?.data ?? []
}

export const getPost = async (id: string): Promise<Post | null> => {
  const response = await fetchInstagram()
  return response?.data?.find((post) => post.id === id) ?? null
}

export const getPostsByUser = async (userId: string): Promise<Post[]> => {
  const response = await fetchInstagram()
  return response?.data?.filter((post) => post.user.id === userId) ?? []
}
