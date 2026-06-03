import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { Post } from "../types/post"

const baseUrl = "http://127.0.0.1:8000"

export const useGetPosts = () => {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/posts`)
      return data
    },
    staleTime: 1000 * 60 * 5,
  })
}

export const useGetPostById = (id: string) => {
  return useQuery<Post>({
    queryKey: ["posts", id],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/posts/${id}`)
      return data
    },

    staleTime: 1000 * 60 * 5,
  })
}

export type { Post as Posts }
