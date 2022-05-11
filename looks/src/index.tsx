import { List, ActionPanel, Action, closeMainWindow, popToRoot, LocalStorage} from "@raycast/api";
import { useEffect, useState, useCallback } from "react";
import looks, { Look } from "./looks";
import { randomUUID } from "crypto";
import type { SetStateAction, Dispatch } from "react";

function useStateFromLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>, boolean] {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    (async () => {
      const cache = await LocalStorage.getItem(key);

      if (typeof cache === "string") {
        setState(JSON.parse(cache));
      }
      setLoading(false);
    })();
  }, []);

  const setStateAndLocalStorage = useCallback((updater) => {
    setState((state) => {
      const newValue = typeof updater === "function" ? updater(state) : updater;
      LocalStorage.setItem(key, JSON.stringify(newValue));
      return newValue;
    });
  }, []);

  return [state, setStateAndLocalStorage, loading];
}

export default function main() {
  const [searchText, setSearchText] = useState("");
  const [filteredList, filterList] = useState<Look[]>(looks); 

  useEffect(() => {
    filterList(looks.filter((look: Look) => look.title ? look.title.toLowerCase().includes(searchText.toLowerCase()) : ''));
  }, [searchText]);

  const [recentlyUsed, setRecentlyUsed] = useStateFromLocalStorage<Look[]>("looks-recently-used", []);
  const addToRecentlyUsed = useCallback(
    (look: Look) => {
      setRecentlyUsed((list) =>
        list.find((x) => x.title === look.title) ? list : [look, ...list].slice(0, 10)
      );
    },
    [setRecentlyUsed]
  );

  return (
    <List
      enableFiltering={true}
      onSearchTextChange={setSearchText}
      navigationTitle="Search looks"
      searchBarPlaceholder="Search looks.wtf"
    >
      <List.Section title='Recently used' key={randomUUID()}>
        {
          recentlyUsed.map((look) => (
            <List.Item
              key={randomUUID()}
              title={look.title || look.tags[0]}
              icon={"icon"}
              accessoryTitle={look.plain || ""}
              keywords={look.tags}
              actions={
                <ActionPanel>
                  <ActionPanel.Section>
                    <Action.CopyToClipboard
                      title="Copy look to Clipboard"
                      content={look.plain}
                      onCopy={() => {
                        closeMainWindow();
                        popToRoot();
                      }}
                    />
                    <Action.Paste
                      title="Paste Look in Active App"
                      content={look.plain}
                      onPaste={() => {
                        closeMainWindow();
                        popToRoot();
                      }}
                    />
                    <Action title="Console Log" onAction={() => console.log(recentlyUsed)} />
                  </ActionPanel.Section>
                </ActionPanel>
              }
            />
          ))
        }
      </List.Section>

      <List.Section title='Results' key={randomUUID()}>
        {filteredList.map((look) => (
          <List.Item
            key={randomUUID()}
            title={look.title || look.tags[0]}
            icon={"icon"}
            accessoryTitle={look.plain || ""}
            keywords={look.tags}
            actions={
              <ActionPanel>
                <ActionPanel.Section>
                  <Action.CopyToClipboard
                    title="Copy look to Clipboard"
                    content={look.plain}
                    onCopy={() => {
                      closeMainWindow();
                      popToRoot();
                      addToRecentlyUsed(look);
                      console.log(recentlyUsed);
                    }}
                  />
                  <Action.Paste
                    title="Paste Look in Active App"
                    content={look.plain}
                    onPaste={() => {
                      closeMainWindow();
                      popToRoot();
                      addToRecentlyUsed(look);
                      console.log(recentlyUsed);
                    }}
                  />
                  <Action title="Console Log" onAction={() => console.log(recentlyUsed)} />
                </ActionPanel.Section>
              </ActionPanel>
            }
          />
        ))}
      </List.Section>
    </List>
  );

  // return (
  //   <List isLoading={isLoading}>
  //     {!isLoading
  //       ?
  //           <List.Section title="Looks">
  //             {looks.map((look: Look) => (
  //               <List.Item
  //                 key={`${look.title}${look.plain}`}
  //                 id={`${look.title}${look.plain}`}
  //                 icon={'icon'}
  //                 title={look.title || ''}
  //                 accessoryTitle={look.plain || ''}
  //                 keywords={look.tags}
  //                 actions={
  //                   <ActionPanel>
  //                     <ActionPanel.Section>
  //                       <Action.CopyToClipboard
  //                         title="Copy look to Clipboard"
  //                         content={look.plain}
  //                         onCopy={() => {
  //                           closeMainWindow();
  //                           popToRoot();
  //                         }}
  //                       />
  //                       <Action.Paste
  //                         title="Paste Look in Active App"
  //                         content={look.plain}
  //                         onPaste={() => {
  //                           closeMainWindow();
  //                           popToRoot();
  //                         }}
  //                       />
  //                     </ActionPanel.Section>
  //                   </ActionPanel>
  //                 }
  //               />
  //             ))}
  //           </List.Section>
  //       : []}
  //   </List>
  // )
}
