import React, { useState } from 'react';
import useAxios from '../hooks/useAxios'; // 👈 your custom hook

const AxiosExample = () => {
  const [postId, setPostId] = useState(1);
  const [formData, setFormData] = useState({ title: '', content: '' });

  // GET
  const {
    data: getData,
    loading: getLoading,
    error: getError,
    refetch: getRefetch,
  } = useAxios({
    url: `/api/posts/${postId}`,
    method: 'GET',
    auto: false,
  });

  // POST
  const {
    data: postData,
    loading: postLoading,
    error: postError,
    refetch: postRefetch,
  } = useAxios({
    url: '/api/posts',
    method: 'POST',
    auto: false,
  });

  // PUT
  const { refetch: putRefetch } = useAxios({
    url: `/api/posts/${postId}`,
    method: 'PUT',
    auto: false,
  });

  // PATCH
  const { refetch: patchRefetch } = useAxios({
    url: `/api/posts/${postId}`,
    method: 'PATCH',
    auto: false,
  });

  // DELETE
  const { refetch: deleteRefetch } = useAxios({
    url: `/api/posts/${postId}`,
    method: 'DELETE',
    auto: false,
  });

  // Form handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePostSubmit = () => {
    postRefetch(formData);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>🧪 Axios Hook Demo</h2>

      {/* GET Example */}
      <div>
        <h4>🔍 GET Post by ID</h4>
        <input
          type="number"
          value={postId}
          onChange={(e) => setPostId(Number(e.target.value))}
          style={{ marginRight: '1rem' }}
        />
        <button onClick={() => getRefetch()}>GET</button>
        {getLoading && <p>Loading...</p>}
        {getError && <p>Error: {getError.message}</p>}
        {getData && (
          <pre style={{ background: '#f4f4f4', padding: '1rem' }}>
            {JSON.stringify(getData, null, 2)}
          </pre>
        )}
      </div>

      <hr />

      {/* POST Example */}
      <div>
        <h4>📨 POST New Post</h4>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <br />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleInputChange}
          rows={3}
          cols={30}
          style={{ marginTop: '0.5rem' }}
        />
        <br />
        <button onClick={handlePostSubmit} style={{ marginTop: '0.5rem' }}>
          POST
        </button>
        {postLoading && <p>Posting...</p>}
        {postError && <p>Error: {postError.message}</p>}
        {postData && <p>✅ Created: {JSON.stringify(postData)}</p>}
      </div>

      <hr />

      {/* Other Actions */}
      <h4>🛠️ Other Actions</h4>
      <button onClick={() => putRefetch({ title: 'Updated Title', content: 'Updated content' })}>
        PUT
      </button>
      <button onClick={() => patchRefetch({ title: 'Patched Title' })}>PATCH</button>
      <button onClick={() => deleteRefetch()}>DELETE</button>
    </div>
  );
};

export default AxiosExample;
