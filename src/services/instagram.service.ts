import { InstagramResponse } from "../types/api.type"
import { Post } from "../types/post.type"

const API_URL = './public/data.json'
const USER_IMAGE_URL = 'https://robohash.org/'
const FEED_IMAGE_URL = 'https://picsum.photos/id/'

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

export const getPostsByUser = async (username: string): Promise<Post[]> => {
  const response = await fetchInstagram()
  return response?.data?.filter((post) => post.user.username === username) ?? []
}

export const getUserPhotoURL = async (username: string): Promise<string> => {
  return `${USER_IMAGE_URL}${username}`
}

export const getFeedPhotoURL = async (id: string, size = 500): Promise<string> => {
  return `${FEED_IMAGE_URL}${id}/${size}/${size}`
}