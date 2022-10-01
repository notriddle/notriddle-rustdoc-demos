window.SIDEBAR_ITEMS = {"constant":[["MAX_BYTES_TO_HASH","This is the maximum size we will hash at a time, when interning an `Allocation` and its `InitMask`. Note, we hash that amount of bytes twice: at the start, and at the end of a buffer. Used when these two structures are large: we only partially hash the larger fields in that situation. See the comment at the top of their respective `Hash` impl for more details."],["MAX_HASHED_BUFFER_LEN","This is the maximum size (in bytes) for which a buffer will be fully hashed, when interning. Otherwise, it will be partially hashed in 2 slices, requiring at least 2 `MAX_BYTES_TO_HASH` bytes."]],"enum":[["AllocError","We have our own error type that does not know about the `AllocId`; that information is added when converting to `InterpError`."],["InitChunk","A contiguous chunk of initialized or uninitialized memory."]],"fn":[["alloc_range","Free-starting constructor for less syntactic overhead."]],"struct":[["AllocRange","The information that makes up a memory access: offset and size."],["Allocation","This type represents an Allocation in the Miri/CTFE core engine."],["AllocationProvenance","A partial, owned list of provenance to transfer into another allocation."],["ConstAllocation","Interned types generally have an `Outer` type and an `Inner` type, where `Outer` is a newtype around `Interned<Inner>`, and all the operations are done on `Outer`, because all occurrences are interned. E.g. `Ty` is an outer type and `TyS` is its inner type."],["InitChunkIter","Yields [`InitChunk`]s. See [`InitMask::range_as_init_chunks`]."],["InitMask","A bitmask where each bit refers to the byte with the same index. If the bit is `true`, the byte is initialized. If it is `false` the byte is uninitialized."],["InitMaskCompressed","Run-length encoding of the uninit mask. Used to copy parts of a mask multiple times to another allocation."],["ProvenanceMap","Stores the provenance information of pointers stored in memory."]],"type":[["AllocResult",""],["Block",""]]};