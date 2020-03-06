import React from "react";

import Button from "../../components/button";
import SaveMessage from "../../components/save-message";

const MarkdownEditorHeader = ({ isSaving, handleRemove, handleCreate }) => (
  <header className="editor-header">
    <SaveMessage isSaving={isSaving} />

    <Button onClick={handleCreate} kind="success">
      Criar novo
    </Button>

    <Button onClick={handleRemove} kind="danger">
      Remover
    </Button>
  </header>
);

export default MarkdownEditorHeader;
