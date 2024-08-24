import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  ButtonBase,
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { defaultLanguage, languages as Ilanguages } from "@/config/global-config";
import { useTranslation } from "react-i18next";

const Localization = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"));
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!Ilanguages.some((lang) => lang.code === i18n.language)) {
      i18n.changeLanguage(defaultLanguage);
    }
  }, [i18n]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current?.contains(event.target as Node)) {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }} className="flex bg-transparent" alignItems="center" justifyContent="center">
      <ButtonBase
        ref={anchorRef}
        aria-label="open localization"
        aria-controls={open ? "localization-menu" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className="flex flex-row items-center justify-center bg-transparent gap-1 rounded h-12 px-2"
      >
        <Box className="w-6 h-5">
          <img
            src={Ilanguages.find((lang) => lang.code === i18n.language)?.flag}
            className="w-full h-full object-contain"
            alt={Ilanguages.find((lang) => lang.code === i18n.language)?.code}
          />
        </Box>
        <KeyboardArrowDownIcon fontSize="small" className={open ? "rotate-180" : ""} />
      </ButtonBase>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement={matchesXs ? "bottom-start" : "bottom"}
        disablePortal
        popperOptions={{
          modifiers: [{ name: "offset", options: { offset: [0, 9] } }],
        }}
      >
        <Paper sx={{ boxShadow: theme.shadows[1] }}>
          <ClickAwayListener onClickAway={handleClose}>
            <List
              component="nav"
              sx={{
                p: 0,
                width: "100%",
                minWidth: 140,
                maxWidth: matchesXs ? 250 : 280,
                bgcolor: theme.palette.background.paper,
                borderRadius: 0.5,
              }}
            >
              {Ilanguages.map((item) => (
                <ListItemButton
                  selected={i18n.language === item.code}
                  onClick={() => {
                    i18n.changeLanguage(item.code);
                    setOpen(false);
                  }}
                  key={item.code}
                >
                  <ListItemText
                    primary={
                      <Box display="flex">
                        <Typography variant="body2">{item.name}</Typography>
                        <Typography variant="caption" sx={{ ml: 1 }}>
                          ({item.code})
                        </Typography>
                      </Box>
                    }
                  />
                </ListItemButton>
              ))}
            </List>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </Box>
  );
};

export default Localization;
