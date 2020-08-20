export const post = <T>(url: string, data: T) => {
    return fetch(url, {
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
        method: 'POST',
        credentials: 'same-origin'
    }).then((response: Response) => response.json())
    .catch((error: Error) => {
        console.error('Error:', error)
    })
}

// export const upload = (url: string, data: FormData) => {
//     return fetch(url, {
//         headers: {
//             'content-type': 'multipart/form-data'
//         },
//         body: data,
//         method: 'PUT',
//         credentials: 'same-origin'
//     }).then((response: Response) => response.json())
//     .catch((error: Error) => {
//         console.error('Error:', error)
//     })
// }