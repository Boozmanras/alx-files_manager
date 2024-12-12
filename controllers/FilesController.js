import FileService from '../services/FileService';

class FilesController {
  // Handles retrieval of a specific file by ID
  static async getShow(req, res) {
    const { id } = req.params;

    try {
      const file = await FileService.getFileById(id);

      if (!file) {
        return res.status(404).json({
          error: 'File not found.'
        });
      }

      res.status(200).json({
        fileId: file.id,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        message: 'File retrieved successfully.'
      });
    } catch (error) {
      res.status(500).json({
        error: 'An error occurred while retrieving the file.',
        details: error.message
      });
    }
  }

  // Handles retrieval of all files
  static async getIndex(req, res) {
    try {
      const files = await FileService.getAllFiles();

      if (!files || files.length === 0) {
        return res.status(404).json({
          message: 'No files found.'
        });
      }

      res.status(200).json({
        files,
        message: 'Files retrieved successfully.'
      });
    } catch (error) {
      res.status(500).json({
        error: 'An error occurred while retrieving the files.',
        details: error.message
      });
    }
  }
}

export default FilesController;
