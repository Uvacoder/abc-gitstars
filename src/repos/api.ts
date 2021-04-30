import { Repo } from "./types";

interface Raw {
    items: Repo[],
    total_count: number
}

export default {
    getData: (page: number): Promise<Raw> => {
        return new Promise((resolve, reject) => {
            return fetch(`https://api.github.com/search/repositories?q=created:>2021-03-31&sort=stars&order=desc&page=${page}`)
                .then(response => { 
                    if (response.ok)
                        return response.json()
                    reject(String(response.status))
                })
                .then(data => resolve(data))
                .catch(err => reject(0))
        })
    },

}