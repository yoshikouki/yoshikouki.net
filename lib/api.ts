import Axios, {AxiosResponse} from "axios";

export interface GetBlogPostsResponse {
  posts: []
  message: null | string
  status: number
}

export default class Api {
  public constructor() {
  }

  public getTo(url: string, paramsData?: {}) {
    Axios.get(url, { params : paramsData })
      .then((res: AxiosResponse) => {
        return res.data
      })
      .catch((error) => {
        console.log("[ERROR] Axios get (DevApi#requestGet)")
        console.log("message: ", error.message)
        return false
      })
  }

  public async getBlogPosts() {
    const url = "https://note.com/api/v2/creators/yoshikouki/contents"
    const params = { kind : "note" }
    return Api.ErrorGetBlogPosts
  }

    posts:[{
      title: 'テストの記事です'
    }],
  public static ErrorGetBlogPosts: GetBlogPostsResponse = {
    message: '[ERROR] ブログ記事の取得に失敗しました。Api#getBlogPosts ',
    status: 404
  }
}
