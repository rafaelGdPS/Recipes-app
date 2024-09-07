export const allFetch = async (url: string) => {
  try {
    const response = await fetch(url)
    const data = await response.json();
    return data;
  } catch (error) {
    window.alert('Dados não encontrados');
  }
};