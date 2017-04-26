export class Repo {
  id: number;
  name: string;
  stars: number;
  creationDate: string;
  owner: string;
  avatar: string;
  fullname: string;
  description: string;
  language: string;
  forks: string;
  watchers: string;
  clone_url: string;
  constructor(id: number, name: string, stars: number, creationDate: string, owner: string, avatar: string,
              fullname: string, description: string, language: string, forks: string, watchers: string, clone_url: string,
  ) {
    this.id = id;
    this.name = name;
    this.stars = stars;
    this.creationDate = creationDate;
    this.owner = owner;
    this.avatar = avatar;
    this.fullname = fullname;
    this.description = description;
    this.language = language;
    this.forks = forks;
    this.watchers = watchers;
    this.clone_url = clone_url;
  }
}
