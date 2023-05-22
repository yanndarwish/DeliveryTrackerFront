export const handleFiltering = (data: any[], string: string) => {
  const filtered = data.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]?.toString().toLowerCase().includes(string.toLowerCase());
    });
  });

  return filtered;
};

export const handleSorting = (
  data: any[],
  sortField?: string,
  sortOrder?: string
) => {
  if (sortField) {
    const sorted = [...data].sort((a, b) => {
      if (a[sortField] === null) return 1;
      if (b[sortField] === null) return -1;
      if (a[sortField] === null && b[sortField] === null) return 0;
      return (
        a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
          numeric: true,
        }) * (sortOrder === 'asc' ? 1 : -1)
      );
    });
    return sorted;
  } return data
};
