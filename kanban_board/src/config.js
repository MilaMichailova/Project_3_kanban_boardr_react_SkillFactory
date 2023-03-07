const LIST_TYPES = {
  BACKLOG: "backlog",
  READY: "Ready",
  IN_PROGRESS: "inProgress",
  FINISHED: "Finished",
};

const LIST_COPY = {
  [LIST_TYPES.BACKLOG]: "Backlog",
  [LIST_TYPES.READY]: "Ready",
  [LIST_TYPES.IN_PROGRESS]: "In progress",
  [LIST_TYPES.FINISHED]: "Finished",
};

const LIST_COLORS = {
  [LIST_TYPES.BACKLOG]: "#FFFFFF",
  [LIST_TYPES.READY]: "#FFFFFF",
  [LIST_TYPES.IN_PROGRESS]: "#FFFFFF",
  [LIST_TYPES.FINISHED]: "#FFFFFF",
};

export { LIST_TYPES, LIST_COPY, LIST_COLORS };
