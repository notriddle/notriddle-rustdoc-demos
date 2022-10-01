window.SIDEBAR_ITEMS = {"constant":[["METADATA_FILENAME",""]],"fn":[["emit_metadata","We use a temp directory here to avoid races between concurrent rustc processes, such as builds in the same directory using the same filename for metadata while building an `.rlib` (stomping over one another), or writing an `.rmeta` into a directory being searched for `extern crate` (observing an incomplete file). The returned path is the temporary file containing the complete metadata."],["encode_and_write_metadata",""],["non_durable_rename","This function attempts to bypass the auto_da_alloc heuristic implemented by some filesystems such as btrfs and ext4. When renaming over a file that already exists then they will “helpfully” write back the source file before committing the rename in case a developer forgot some of the fsyncs in the open/write/fsync(file)/rename/fsync(dir) dance for atomic file updates."]]};