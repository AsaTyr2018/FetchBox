export async function uploadFile(file) {
  // TODO: implement API call to backend
  return { status: 'placeholder' };
}

export async function fetchFiles() {
  // TODO: fetch list of files from backend
  return [];
}

export async function createLink(fileId, options = {}) {
  // TODO: call backend to generate download link
  return { link: 'placeholder', fileId, ...options };
}

export async function fetchUsers() {
  // TODO: fetch users from backend
  return [];
}

export async function fetchGroups() {
  // TODO: fetch groups from backend
  return [];
}

export async function login(username, password) {
  // TODO: implement authentication
  return { token: 'placeholder', username };
}
