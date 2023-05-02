import React from 'react'
import { MuiFileInput } from 'mui-file-input';

export const UpdateAvatar = () => {
    const [file, setFile] = React.useState(null);
    const handleChange = (newFile) => {
        setFile(newFile)
      }
    //   const addImage = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     // console.log(selectedFile);
    //     formData.append("image", selectedFile);
    //     // console.log(formData);
    //     try {
    //         setLoading(true);
    //         const response = await axios.patch(`/api/users/avatar/${user.userId}/${user.accessToken}`, formData,
    //             {
    //                 headers: { "Content-Type": "multipart/form-data" },
    //                 withCredentials: true
    //             }

    //         )
    //         console.log(response);
    //         setImage(response.data.values.path);
    //         setLoading(false);
    //         // navigate(`/user/${user.userId}`);
    //     }
    //     catch (err) {
    //         setLoading(false);
    //         console.log(err);
    //         setErrMsg( lang === 'ua' ? 'Помилка' : 'Error' )
    //     }

    // }
  return (
    <MuiFileInput value={file} onChange={handleChange} />
  )
}
