const posts = [
    {
        title: 'Google Chrome',
        content: "Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!"
    },
    {
        title: 'Mozilla Firefox',
        content: "Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018."
    },
    {
        title: 'Microsoft Edge',
        content: "Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer."
    }
];

const wrapper = document.getElementById("posts")

for(x in posts){
    let post = posts[x]

    console.log(post.title)
    console.log(post.content)

    const article = document.createElement('article')
    article.classList.add('article')

    const title = document.createElement('h2')
    title.classList.add('title')
    const titleText = document.createTextNode(post.title)
    title.appendChild(titleText)
    article.appendChild(title)

    const content = document.createElement('p')
    const contentText = document.createTextNode(post.content)
    content.appendChild(contentText)
    article.appendChild(content)

    wrapper.appendChild(article)

}