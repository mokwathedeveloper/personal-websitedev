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
