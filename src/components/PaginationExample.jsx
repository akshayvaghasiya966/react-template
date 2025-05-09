import usePagination from '../hooks/usePagination';

const PaginationExample = () => {
  const {
    data: products,
    loading,
    error,
    page,
    totalPages,
    nextPage,
    prevPage,
  } = usePagination({ url: '/api/products', perPage: 5 });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  return (
    <div>
      <h2>Products (Page {page} of {totalPages})</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
      <button onClick={prevPage} disabled={page === 1}>Prev</button>
      <button onClick={nextPage} disabled={page === totalPages}>Next</button>
    </div>
  );
};

export default PaginationExample