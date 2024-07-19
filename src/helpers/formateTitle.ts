export const formatedTitle = (title: string, withHyphens?: boolean) => {
  return withHyphens ? title.replaceAll(' ', '-') : title.replaceAll('-', ' ')
}
