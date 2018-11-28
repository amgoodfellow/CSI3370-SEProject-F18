export const create_account = async (username, email, passwordHash) => {
    let data = {
        username,
        email,
        passwordHash
    }

    let response = await fetch(
        '/member/createMember',
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    )
    let status = await response.status
    return status
}

export const login = async (username, password) => {
    let data = {
        username,
        password
    }

    const formBody = Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')

    let response = await fetch(
        '/member/login',
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody
        }
    )
    return await response
}

export const get_member = async (member) => {
    const data = { 'token': localStorage.getItem('forum-token'), 'username': member }
    const formBody = Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    let response = await fetch(
        '/member/memberInfo',
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + localStorage.getItem('forum-token'),
            },
            body: formBody
        }
    )
    return await response.json()
}

export const create_post = async (title, body) => {
    const data = {
        'title': title,
        'body': body,
        token: localStorage.getItem('forum-token')
    }

    const formBody = Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')

    let response = await fetch(
        '/member/createPost',
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + localStorage.getItem('forum-token'),
            },
            body: formBody
        }
    )
}

export const submit_edited_post = async (title, body, id) => {
    const data = {
        'title': title,
        'body': body,
        'postId': id,
        token: localStorage.getItem('forum-token')
    }

    const formBody = Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')

    let response = await fetch(
        '/member/editPost',
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + localStorage.getItem('forum-token'),
            },
            body: formBody
        }
    )
}

export const get_top_posts = async (username) => {
    const data = {
        username
    }

    const formBody = Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')

    let response = await fetch(
        '/member/topPosts',
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + localStorage.getItem('forum-token'),
            },
            body: formBody
        },
    )

    return await response.json()
}

export const home_posts = async () => {
    let response = await fetch(
        '/post/topPosts',
        {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + localStorage.getItem('forum-token'),
            }
        }
    )
    return await response.json()
}

export const like_post = async (post_id) => {
    const data = {
        post_id,
        token: localStorage.getItem('forum-token')
    }

    const formBody = Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')

    let response = await fetch(
        '/member/like',
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + localStorage.getItem('forum-token'),
            },
            body: formBody
        },
    )
}

export const view_thread = async (post_id) => {

    let response = await fetch(
        '/post/thread?post_id=' + post_id, 
        {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + localStorage.getItem('forum-token'),
            }
        },
    )

    return await response.json()
}

export const post_comment = async (parent_id, body) => {
    const data = {
        parent_id,
        token: localStorage.getItem('forum-token')
    }

    const formBody = Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')

    let response = await fetch(
        '/member/add_comment', 
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + localStorage.getItem('forum-token'),
            },
            body: formBody
        },
    )

    return await response.json()

}