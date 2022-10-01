window.SIDEBAR_ITEMS = {"enum":[["ClosureOutlivesSubject","The subject of a `ClosureOutlivesRequirement` – that is, the thing that must outlive some region."],["ConstraintCategory","Outlives-constraints can be categorized to determine whether and why they are interesting (for error reporting). Order of variants indicates sort order of the category, thereby influencing diagnostic output."],["ReturnConstraint",""],["UnsafetyViolationDetails",""],["UnsafetyViolationKind",""],["UnusedUnsafe",""]],"struct":[["BorrowCheckResult",""],["ClosureOutlivesRequirement","Indicates an outlives-constraint between a type or between two free regions declared on the closure."],["ClosureRegionRequirements","After we borrow check a closure, we are left with various requirements that we have inferred between the free regions that appear in the closure’s signature or on its field types. These requirements are then verified and proved by the closure’s creating function. This struct encodes those requirements."],["ConstQualifs","The result of the `mir_const_qualif` query."],["CoverageInfo","Coverage information summarized from a MIR if instrumented for source code coverage (see compiler option `-Cinstrument-coverage`). This information is generated by the `InstrumentCoverage` MIR pass and can be retrieved via the `coverageinfo` query."],["DestructuredConstant","The constituent parts of a mir constant of kind ADT or array."],["GeneratorLayout","The layout of generator state."],["GeneratorSavedLocal",""],["UnsafetyCheckResult",""],["UnsafetyViolation",""]]};