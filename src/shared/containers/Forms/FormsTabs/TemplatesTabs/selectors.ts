/* eslint-disable */
export const totalTemplatesSelector = ({ templates: { totalTemplates: value = [] } }: any) => value;
export const templatesInitialsSelector = ({ templates: { templatesInitials: value = [] } }: any) => value;
export const fetchingCompanyTemplatesSelector = ({ templates: { fetchingCompanyTemplates: value = true } }: any) =>
  value;
// export const selectedTemplateSelector = ({
//   templates: {
//     selectedTemplate: { id = '', email = '', firstName = '', lastName = '', fullName = '', avatar = '', roles = [] },
//   },
// }) => ({
//   id,
//   email,
//   firstName,
//   lastName,
//   fullName,
//   avatar,
//   roles,
// });
export const templateDeletedSelector = ({ templates: { templateDeleted: value = false } }: any) => value;
export const templateCreatedSelector = ({ templates: { templateCreated: value = false } }: any) => value;
export const addTemplateModalSelector = ({ templates: { isAddModalOpen: value = false } }: any) => value;
export const templateIdToDeleteSelector = ({ templates: { templateIdToDelete: value = false } }: any) => value;
export const deleteTemplateModalSelector = ({ templates: { isDeleteModalOpen: value = false } }: any) => value;
