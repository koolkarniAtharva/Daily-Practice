import { createContext } from "react"
export const PostDataContext = createContext()


const PostContext = ({children}) => {

  const data = [
  {
    "userId": 1,
    "name": "Rahul Sharma",
    "email": "rahul@gmail.com",
    "posts": [
      {
        "postId": 101,
        "title": "My First Blog",
        "content": "This is my first blog post!",
        "likes": 120
      },
      {
        "postId": 102,
        "title": "Learning React",
        "content": "React is really fun to learn.",
        "likes": 95
      }
    ]
  },
  {
    "userId": 2,
    "name": "Priya Verma",
    "email": "priya@gmail.com",
    "posts": [
      {
        "postId": 201,
        "title": "Travel Diaries",
        "content": "Visited Goa last weekend.",
        "likes": 210
      }
    ]
  },
  {
    "userId": 3,
    "name": "Amit Patil",
    "email": "amit@gmail.com",
    "posts": [
      {
        "postId": 301,
        "title": "Fitness Tips",
        "content": "Daily exercise is important.",
        "likes": 175
      }
    ]
  },
  {
    "userId": 4,
    "name": "Neha Joshi",
    "email": "neha@gmail.com",
    "posts": [
      {
        "postId": 401,
        "title": "Cooking Hacks",
        "content": "Quick recipes for busy people.",
        "likes": 160
      }
    ]
  },
  {
    "userId": 5,
    "name": "Karan Mehta",
    "email": "karan@gmail.com",
    "posts": [
      {
        "postId": 501,
        "title": "Tech News",
        "content": "Latest smartphone launch review.",
        "likes": 300
      }
    ]
  }
]


  return (
    <div>
      <PostDataContext.Provider value={data}>
        {children}
      </PostDataContext.Provider>
    </div>
  )
}

export default PostContext
