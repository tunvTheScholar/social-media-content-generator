import { useEffect, useState } from "react";
import {
  GeneratedContent,
  getUserGeneratedContents,
} from "../../services/generate/get-user-generated-content";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { LOCAL_STORAGE_KEYS } from "../../constants/local-storage-keys";
import { groupBy } from "../../lib/group-by";
import Each from "../../components/each";
import CardCaption from "../../components/card-caption";

interface ProfileProps {}
export default function Profile(props: ProfileProps) {
  const [generatedContents, setGeneratedContents] = useState<
    GeneratedContent[]
  >([]);

  const [phoneNumber] = useLocalStorage(LOCAL_STORAGE_KEYS.PHONE_NUMBER, "");

  useEffect(() => {
    getUserGeneratedContents(phoneNumber).then((res) => {
      res?.data && setGeneratedContents(res?.data);
    });
  }, [phoneNumber]);

  const generatedContentsGroupByTopic = groupBy(
    generatedContents,
    ({ topic }) => topic
  );

  return (
    <div>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Saved Content
      </h2>

      <Each
        of={Array.from(generatedContentsGroupByTopic.entries())}
        renderer={([topic, contents]) => (
          <>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {topic}
            </h3>
            <div className="flex flex-col gap-4 mt-4">
              <Each
                of={contents}
                renderer={({ caption, title, id }) => (
                  <CardCaption
                    caption={JSON.stringify({ title, caption })}
                    topic={topic}
                    captionId={id}
                  />
                )}
              />
            </div>
          </>
        )}
      />
    </div>
  );
}
