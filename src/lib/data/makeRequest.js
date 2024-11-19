

const BASE_URL='http://localhost:5050/api/v1/'

// DESIGN PATTERN SOLVING A DESIGN PROBLEM
const pathWithBaseUrl=(path) => {
    if(path.includes('http')) {
        return path
    }
    return BASE_URL+path
}

const getHeaders=() => {

    const headers={
        "Content-Type": "application/json",
    }

    return headers
}

// work         

const handleRequestError=async (response,errorMessage) => {

    if(response.ok) {
        return
    }

    const error=await response.json()
    console.log(error)
    if(response.status===401) {
        return error
    }

    return error
}


const makeRequest=async (method,path,data) => {

    const response=await fetch(path,{
        method: method,
        credentials: 'include',
        headers: {
            ...getHeaders(),
        },
        body: data? JSON.stringify(data):undefined
    })


    await handleRequestError(response,'error')

    try {
        return await response.json()
    } catch {
        return response
    }
}

const makeRawRequest=async (path) => {
    return await fetch(path,{method: "GET",credentials: 'include'})
}

export const ApiRequest={
    GET: async (path) => {
        const response=await makeRawRequest(pathWithBaseUrl(path))
        return await response.json()
    },
    POST: async (path,data) => await makeRequest("POST",pathWithBaseUrl(path),data),
    PATCH: async (path) => await makeRequest("PATCH",pathWithBaseUrl(path)),
    PUT: async (path) => await makeRequest("PUT",pathWithBaseUrl(path)),
    DELETE: async (path) => await makeRequest("DELETE",pathWithBaseUrl(path))
}