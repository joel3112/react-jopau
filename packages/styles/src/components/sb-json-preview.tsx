import ReactJson from 'react-json-view';

export const SBJSONPreview = ({ code, className }: { code: unknown; className?: string }) => {
  if (!code) return <span className="flex items-center font-code text-text">null</span>;

  return (
    <div className="bg-[#272822] font-code p-5 mt-2 border border-border border-solid">
      <div className={className}>
        <ReactJson
          style={{ backgroundColor: 'transparent', fontSize: '0.75rem', lineHeight: '0.8rem' }}
          name={false}
          displayObjectSize={false}
          displayDataTypes={false}
          enableClipboard={false}
          src={code}
          theme="monokai"
          iconStyle="square"
        />
      </div>
    </div>
  );
};
