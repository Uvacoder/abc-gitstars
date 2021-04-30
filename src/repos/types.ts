export interface Repo {
    id: number;
    name: string;
    private: boolean;
    owner: {
        avatar_url: string;
        login: string;
    }
    description: string;
    html_url: string;
    created_at: Date;
    open_issues_count: number;
    stargazers_count: number;
}
