export const sendInviteSelector = ({ employeeInvite: { sent: value = false } }) => value;
export const emailInviteLinkSelector = ({ employeeInvite: { emailInviteLink: value = '' } }) => value;

export const nameErrorSelector = ({ core: { formErrors } }: any) => formErrors?.name || [];
export const templateErrorSelector = ({ core: { formErrors } }: any) => formErrors?.template || [];
