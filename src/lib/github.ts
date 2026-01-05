export async function getUserRepos(username: string) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    if (!response.ok) return [];
    
    const data = await response.json();
    return data
      .filter((repo: any) => !repo.fork)
      .map((repo: any) => ({
        id: repo.id,
        title: repo.name.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
        description: repo.description || "No description provided.",
        tags: [repo.language, ...(repo.topics || [])].filter(Boolean).slice(0, 5),
        category: repo.topics?.includes("web-app") ? "Web App" : 
                  repo.topics?.includes("full-stack") ? "Full Stack" : 
                  repo.topics?.includes("ai") ? "AI/ML" : "Open Source",
        link: repo.homepage || repo.html_url,
        github: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
      }));
  } catch (error) {
    console.error("Error fetching user repos:", error);
    return [];
  }
}

export async function getRepoStats(repoUrl: string) {
  try {
    const parts = repoUrl.replace("https://github.com/", "").split("/");
    if (parts.length < 2) return null;
    
    const [owner, repo] = parts;
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    if (!response.ok) return null;
    
    const data = await response.json();
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      description: data.description,
    };
  } catch (error) {
    return null;
  }
}