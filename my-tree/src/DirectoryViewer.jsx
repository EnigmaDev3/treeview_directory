export function returnTreeView(directoryContent) {
  function addChild(obj, pathParts, fileName) {
      if (pathParts.length === 0) {
          obj.push({
              name: fileName,
          });
          return;
      }

      const [part, ...rest] = pathParts;
      let child = obj.find((el) => el.name === part);

      if (!child) {
          child = {
              name: part,
              children: [],
          };
          obj.push(child);
      }

      addChild(child.children, rest, fileName);
  }

  let treeView = {
      children: [],
  };

  Object.values(directoryContent).forEach((file) => {
      const pathParts = file.webkitRelativePath.split("/");
      const fileName = pathParts.pop();
      addChild(treeView.children, pathParts, fileName);
  });

  return treeView.children.length === 1 ? treeView.children[0] : treeView;
}
