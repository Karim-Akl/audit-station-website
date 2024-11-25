import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const ReviewTextArea = () => {
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'underline', 'italic', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      [{ align: [] }],
    ],
  };

  const quillFormats = [
    'header',
    'bold',
    'underline',
    'italic',
    'strike',
    'list',
    'bullet',
    'link',
  ];

  return (
    <>
      <div className={`w-full rtl m-2 `}>
        <ReactQuill
          //   value={value}
          //   onChange={onChange}
          formats={quillFormats}
          modules={quillModules}
          theme='snow'
          style={{ direction: 'ltr', height: '200px' }}
        />
      </div>
    </>
  );
};

export default ReviewTextArea;
