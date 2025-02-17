const fetchUserData = async (id) => {
  try {
    const response = await fetch(`https://api.github.com/user/${id}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.log(error.message);
  }
};

const getUserData = async (id) => {
  const data = await fetchUserData(id);
  console.log(data);
};

getUserData(23);
