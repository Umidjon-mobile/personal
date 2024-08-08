export const TodayWorks = async () => {
  try {
    const response = await fetch("http://192.168.1.9:8081/api/post/get");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
