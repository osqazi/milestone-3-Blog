export default {
    name: "contact",
    title: "Contact Submissions",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule) => Rule.required().min(2).max(100),
      },
      {
        name: "email",
        title: "Email",
        type: "string",
        validation: (Rule) =>
          Rule.required().email().error("Please enter a valid email address"),
      },
      {
        name: "message",
        title: "Message",
        type: "text",
        validation: (Rule) => Rule.required().min(10).max(1000),
      },
      {
        name: "submittedAt",
        title: "Submitted At",
        type: "datetime",
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      },
    ],
  };
  