import multer from 'multer'

const fileStorageEngineAvatar = (path) => multer.diskStorage({
    destination: (_req, _file, cb) => {
		cb(null, path);
    },

    filename: (_req, file, cb) => {
      	cb(null, `${file.originalname}`);
		
    },
});

export const uploadAvatarImage = multer({ storage: fileStorageEngineAvatar('./assets/avatars') });

