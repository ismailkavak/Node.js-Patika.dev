const posts = [
    {post : "post 1"},
    {post : "post 2"},
    {post : "post 3"}
]

function orderPosts(){
    posts.map(post => {
        console.log(post.post)
    })
}

const addPost = (newPost) => {
    const promise = new Promise((resolve, reject) => {
        posts.push(newPost)
        resolve(posts)
        reject("Error!")
    })
    return promise;
}

async function showPost(){
    try{
        await addPost({ post: "post 4" })
        orderPosts()
    } catch(err){
        console.log(err)
    }
}
showPost()