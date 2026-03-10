export const labelWriter = (prompt: string) => ({
  title: prompt.length > 80 ? `${prompt.slice(0, 77)}...` : prompt,
  keyMessage: 'Draft AI-generated editorial framing. Please review before export.'
});
