window.SIDEBAR_ITEMS = {"constant":[["MIRI_DEFAULT_ARGS","Insert rustc arguments at the beginning of the argument list that Miri wants to be set per default, for maximal validation power."],["NUM_CPUS",""],["PAGE_SIZE",""],["STACK_ADDR",""],["STACK_SIZE",""]],"enum":[["AlignmentCheck",""],["AllocKind","The return value of `get_alloc_info` indicates the “kind” of the allocation."],["AtomicFenceOrd","Valid atomic fence orderings, subset of atomic::Ordering."],["AtomicReadOrd","Valid atomic read orderings, subset of atomic::Ordering."],["AtomicRwOrd","Valid atomic read-write orderings, alias of atomic::Ordering (not non-exhaustive)."],["AtomicWriteOrd","Valid atomic write orderings, subset of atomic::Ordering."],["BacktraceStyle",""],["CheckInAllocMsg","Details of why a pointer had to be in-bounds."],["ConstValue","Represents a constant value in Rust. `Scalar` and `Slice` are optimizations for array length computations, enum discriminants and the pattern matching logic."],["CtfeValidationMode","Extra things to check for during validation of CTFE results."],["Dlsym",""],["ErrorHandled",""],["FnVal","The value of a function pointer."],["GlobalAlloc","An allocation in the global (tcx-managed) memory can be either a function pointer, a static, or a “real” allocation with some data in it."],["Immediate","An `Immediate` represents a single immediate self-contained Rust value."],["InitChunk","A contiguous chunk of initialized or uninitialized memory."],["InternKind",""],["InterpError",""],["InvalidProgramInfo","Error information for when the program we executed turned out not to actually be a valid program. This cannot happen in stand-alone Miri, but it can happen during CTFE/ConstProp where we work on generic code or execution does not have all information available."],["IsolatedOp",""],["LitToConstError","Error type for `tcx.lit_to_const`."],["LocalValue","Current value of a local variable"],["MemPlaceMeta","Information required for the sound usage of a `MemPlace`."],["MemoryKind",""],["MiriMemoryKind","Extra memory kinds"],["NonHaltingDiagnostic","Miri specific diagnostics"],["Operand","An `Operand` is the result of computing a `mir::Operand`. It can be immediate, or still in memory. The latter is an optimization, to delay reading that chunk of memory and to avoid having to store arbitrary-sized data here."],["Permission","Indicates which permission is granted (by this item to some pointers)"],["Place",""],["Provenance","Pointer provenance."],["ProvenanceExtra","The “extra” information a pointer has over a regular AllocId."],["ProvenanceMode",""],["RejectOpWith",""],["ResourceExhaustionInfo","Error information for when the program exhausted the resources granted to it by the interpreter."],["Scalar","A `Scalar` represents an immediate, primitive value existing outside of a `memory::Allocation`. It is in many ways like a small chunk of an `Allocation`, up to 16 bytes in size. Like a range of bytes in an `Allocation`, a `Scalar` can either represent the raw bytes of a simple value or a pointer into another `Allocation`"],["SchedulingAction",""],["StackPopCleanup",""],["StackPopJump","Data returned by Machine::stack_pop, to provide further control over the popping of the stack frame"],["StackPopUnwind","Unwind information."],["TerminationInfo","Details of premature program termination."],["ThreadState","The state of a thread."],["Time","A specific moment in time."],["UndefinedBehaviorInfo","Error information for when the program caused Undefined Behavior."],["UnsupportedOpInfo","Error information for when the program did something that might (or might not) be correct to do according to the Rust spec, but due to limitations in the interpreter, the operation could not be carried out. These limitations can differ between CTFE and the Miri engine, e.g., CTFE does not support dereferencing pointers at integral addresses."]],"fn":[["alloc_range","Free-starting constructor for less syntactic overhead."],["create_ecx","Returns a freshly created `InterpCx`, along with an `MPlaceTy` representing the location where the return value of the `start` function will be written to. Public because this is also used by `priroda`."],["eval_entry","Evaluates the entry function specified by `entry_id`. Returns `Some(return_code)` if program executed completed. Returns `None` if an evaluation error occurred."],["get_slice_bytes","Gets the bytes of a constant slice value."],["intern_const_alloc_recursive","Intern `ret` and everything it references."],["read_target_uint",""],["report_error","Emit a custom diagnostic without going through the miri-engine machinery"],["specialized_encode_alloc_id",""],["struct_error",""],["write_target_uint",""]],"macro":[["compile_time_machine",""]],"mod":[["clock",""],["concurrency",""],["diagnostics",""],["eval","Main evaluator loop and setting up the initial stack frame."],["helpers",""],["interpret","An interpreter for MIR used in CTFE and by miri"],["intptrcast",""],["machine","Global machine state as well as implementation of the interpreter engine `Machine` trait."],["mono_hash_map","This is a “monotonic `FxHashMap`”: A `FxHashMap` that, when shared, can be pushed to but not otherwise mutated. We also box items in the map. This means we can safely provide shared references into existing items in the `FxHashMap`, because they will not be dropped (from being removed) or moved (because they are boxed). The API is is completely tailored to what `memory.rs` needs. It is still in a separate file to minimize the amount of code that has to care about the unsafety."],["operator",""],["range_map","Implements a map from integer indices to data. Rather than storing data for every index, internally, this maps entire ranges to the data. To this end, the APIs all work on ranges, not on individual integers. Ranges are split as necessary (e.g., when [0,5) is first associated with X, and then [1,2) is mutated). Users must not depend on whether a range is coalesced or not, even though this is observable via the iteration APIs."],["shims",""],["stacked_borrows","Implements “Stacked Borrows”.  See https://github.com/rust-lang/unsafe-code-guidelines/blob/master/wip/stacked-borrows.md for further information."],["tag_gc",""]],"struct":[["AllocDecodingSession",""],["AllocDecodingState",""],["AllocExtra","Extra per-allocation data"],["AllocId",""],["AllocRange","The information that makes up a memory access: offset and size."],["AllocRef","A reference to some allocation that was already bounds-checked for the given region and had the on-access machine hooks run."],["AllocRefMut","A reference to some allocation that was already bounds-checked for the given region and had the on-access machine hooks run."],["Allocation","This type represents an Allocation in the Miri/CTFE core engine."],["CatchUnwindData","Holds all of the relevant data for when unwinding hits a `try` frame."],["Clock","A monotone clock used for `Instant` simulation."],["CondvarId","0 is used to indicate that the id was not yet assigned and, therefore, is not a valid identifier."],["ConstAlloc","Represents the result of const evaluation via the `eval_to_allocation` query."],["ConstAllocation","Interned types generally have an `Outer` type and an `Inner` type, where `Outer` is a newtype around `Interned<Inner>`, and all the operations are done on `Outer`, because all occurrences are interned. E.g. `Ty` is an outer type and `TyS` is its inner type."],["CurrentSpan","A `CurrentSpan` should be created infrequently (ideally once) per interpreter step. It does nothing on creation, but when `CurrentSpan::get` is called, searches the current stack for the topmost frame which corresponds to a local crate, and returns the current span in that frame. The result of that search is cached so that later calls are approximately free."],["EnvVars",""],["Frame","A stack frame."],["FrameData","Extra data stored with each stack frame"],["FrameInfo","What we store about a frame in an interpreter backtrace."],["GlobalId","Uniquely identifies one of the following:"],["ImmTy",""],["InitChunkIter","Yields [`InitChunk`]s. See [`InitMask::range_as_init_chunks`]."],["InitMask","A bitmask where each bit refers to the byte with the same index. If the bit is `true`, the byte is initialized. If it is `false` the byte is uninitialized."],["Instant",""],["InterpCx",""],["InterpErrorInfo","Packages the kind of error we got from the const code interpreter up with a Rust-level backtrace of where the error occurred. These should always be constructed by calling `.into()` on an `InterpError`. In `rustc_mir::interpret`, we have `throw_err_*` macros for this."],["Item","An item in the per-location borrow stack."],["LitToConstInput","Input argument for `tcx.lit_to_const`."],["LocalState","State of a local variable including a memoized layout"],["MPlaceTy","A MemPlace with its layout. Constructing it is only possible in this module."],["MemPlace",""],["Memory",""],["MiriConfig","Configuration needed to spawn a Miri instance."],["MiriMachine","The machine itself."],["MonoHashMap",""],["MutexId","0 is used to indicate that the id was not yet assigned and, therefore, is not a valid identifier."],["OpTy",""],["PlaceTy",""],["Pointer","Represents a pointer in the Miri engine."],["ProvenanceMap","Stores the provenance information of pointers stored in memory."],["RangeMap",""],["RefTracking","State for tracking recursive validation of references"],["RwLockId","0 is used to indicate that the id was not yet assigned and, therefore, is not a valid identifier."],["SbTag","Tracking pointer provenance"],["ScalarSizeMismatch","Information about a size mismatch."],["Stack","Extra per-location state."],["Stacks","Extra per-allocation state."],["ThreadId","A thread identifier."],["ThreadManager","A set of threads."],["TlsData",""],["UninitBytesAccess","Details of an access to uninitialized bytes where it is not allowed."]],"trait":[["AllocMap","The functionality needed by memory to manage its allocations"],["DataRaceEvalContextExt",""],["DiagnosticsEvalContextExt",""],["HelpersEvalContextExt",""],["Machine","Methods of this trait signifies a point where CTFE evaluation would fail and some use case dependent behaviour can instead be applied."],["MachineStopType","A trait for machine-specific errors (or other “machine stop” conditions)."],["MayLeak","Whether this kind of memory is allowed to leak"],["MiriInterpCxExt","A little trait that’s useful to be inherited by extension traits."],["MutValueVisitor",""],["OperatorEvalContextExt",""],["PointerArithmetic",""],["Provenance","This trait abstracts over the kind of provenance that is associated with a `Pointer`. It is mostly opaque; the `Machine` trait extends it with some more operations that also have access to some global state. We don’t actually care about this `Debug` bound (we use `Provenance::fmt` to format the entire pointer), but `derive` adds some unnecessary bounds."],["StackedBorEvalContextExt",""],["SyncEvalContextExt",""],["ThreadsEvalContextExt",""],["Value","A thing that we can project into, and that has a layout. This wouldn’t have to depend on `Machine` but with the current type inference, that’s just more convenient to work with (avoids repeating all the `Machine` bounds)."],["ValueVisitor",""]],"type":[["CallId",""],["EvalToAllocationRawResult",""],["EvalToConstValueResult",""],["EvalToValTreeResult",""],["InterpResult",""],["MiriInterpCx","A rustc InterpCx for Miri."]]};