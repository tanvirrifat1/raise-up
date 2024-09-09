export const incrementId = async (
  prismaModel,
  fieldName: string,
  incrementName: string,
  businessId: number
) => {
  // Adjust the query to include the incrementName in the where clause
  const itemCode = await prismaModel.findMany({
    where: {
      bizid: businessId,
      // Assuming the field that stores the incrementName is named 'incrementNameField'
      xitemcode: {
        contains: incrementName,
      },
    },
    orderBy: {
      [fieldName]: "desc",
    },
    select: {
      [fieldName]: true,
    },
  });

  let newItemCode: string;

  if (itemCode.length === 0) {
    newItemCode = `${incrementName}00001`;
  } else {
    const highestFieldValue = parseInt(itemCode[0][fieldName].slice(-5));
    const incrementedFieldValue = highestFieldValue + 1;
    newItemCode = `${incrementName}${incrementedFieldValue
      .toString()
      .padStart(5, "0")}`;
  }

  return newItemCode;
};
