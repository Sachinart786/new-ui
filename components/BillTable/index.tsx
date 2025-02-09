import React from "react";
// import { showError } from "@/utils/toaster";
// import { useToaster, IconButton, Text, Flex, Button } from "@core/ui-react";
// import { SelectInput } from "../Inputs/SelectInput";

import Select from "react-select";

// import { EditIcon } from "@/icons/EditIcon";
// import { DeleteIcon } from "@/icons/DeleteIcon";
// import SuccessPulse from "@/icons/tickpulse";
// import { PageLayout } from "@core/ui-layouts-react";
// import { ExpanderIcons } from "@/icons/expander";
// import { DeleteLink } from "@/icons/DeleteLink";

interface RowData {
  product: any;
  quantity: any;
  editing: boolean;
}

interface RateTableProps {
  rows: RowData[];
  saveTableData: (rowData: RowData[]) => void;
  // isView?: boolean;
  currencyOptions: [];
}

const RateTable: React.FC<RateTableProps> = ({
  rows = [],
  saveTableData,
  // isView,
  currencyOptions,
}) => {
  // const toaster = useToaster();
  const [currencyOption] = React.useState(currencyOptions);

  const marginOptions = [
    {
      label: "Volatile Margin",
      value: "Volatile Margin",
    },
    { label: "Direct Margin", value: "Direct Margin" },
    { label: "Business Centre Margin", value: "Business Centre Margin" },
  ];

  const validateTable = () => {
    // const isValid = rows.every((e) => {
    //   return e.currency;
    // });

    // if (!isValid) {
    //   // showError(toaster, "Please Select Currency");
    //   return false;
    // }
    return true;
  };

  // const saveRow = (row: RowData) => {
  //   if (!validateTable()) {
  //     return false;
  //   }
  //   const isDuplicate = rows.some(
  //     (e: RowData) =>
  //       e !== row &&
  //       e.currency === row.currency &&
  //       e.rateInclusion === row.rateInclusion
  //   );

  //   if (isDuplicate) {
  //     showError(toaster, "Duplicate Entry Found");
  //     return false;
  //   }
  //   const updatedRows: RowData[] = rows.map((e: RowData) => {
  //     if (e === row) {
  //       return { ...e, editing: false };
  //     }
  //     return e;
  //   });
  //   saveTableData(updatedRows);
  // };

  // const deleteRow = (rowToDelete: RowData) => {
  //   const updatedRows = rows.filter((row) => row !== rowToDelete);
  //   saveTableData(updatedRows);
  //   if (rows.indexOf(rowToDelete) === 0) {
  //     // setShow(false);
  //   }
  // };

  const addRow = () => {
    if (!validateTable()) {
      return false;
    }
    const currencies = new Set(rows.map((e) => e.product));
    if (currencies.size > 9) {
      // showError(toaster, "Maximum Currencies Selected");
      return;
    }
    const newRows: RowData[] = [
      ...rows,
      {
        product: "",
        quantity: "",
        editing: true,
      },
    ];
    saveTableData(newRows);
  };

  // React.useEffect(() => {
  //   if (rows.length === 0) {
  //     addRow();
  //   }
  // }, [rows]);

  return (
    <div className="inline-table-container">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row: any, index: number) => (
            <tr key={index}>
              {!row.editing && <td>{row.currency}</td>}
              {!row.editing && (
                <td>{row.rateInclusion ? row.rateInclusion : "--"}</td>
              )}

              {row.editing && (
                <td className="exchange-edit-cell-type">
                  <Select
                    name="currency"
                    placeholder="Select Currency"
                    options={currencyOption}
                    onChange={(e: any) => {
                      const updatedRows = [...rows];
                      updatedRows[index].product = e.value;
                      saveTableData(updatedRows);
                    }}
                    value={currencyOption.find(
                      (c: any) => c.value === row.product
                    )}
                  />
                </td>
              )}
              {row.editing && (
                <td className="exchange-edit-cell-type">
                  <Select
                    name="rateInclusion"
                    placeholder="Select Rate Inclusion"
                    options={marginOptions}
                    onChange={(e: any) => {
                      const updatedRows = [...rows];
                      updatedRows[index].quantity = e.value;
                      saveTableData(updatedRows);
                    }}
                    value={marginOptions.find(
                      (c: any) => c.value === row.quantity
                    )}
                  />
                </td>
              )}
              {/* <td className="action-btn">
                <Flex>
                  {!row.editing && !isView && (
                    <div onClick={() => editRow(row)}>
                      <EditIcon />
                    </div>
                  )}
                  {row.editing && !isView && (
                    <div onClick={() => saveRow(row)}>
                      <SuccessPulse />
                    </div>
                  )}
                  {!row.editing && !isView && (
                    <div onClick={() => deleteRow(row)}>
                      <DeleteIcon />
                    </div>
                  )}
                </Flex>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <IconButton
        label=""
        size="small"
        styleType="borderless"
        className="add-new-fields-container"
        style={{ justifyContent: "end" }}
        onClick={addRow}
      >
        <ExpanderIcons />
        <span className="add-new-fields">Add More</span>
      </IconButton> */}
    </div>
  );
};

export default RateTable;
